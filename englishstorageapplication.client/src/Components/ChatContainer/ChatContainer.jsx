import React, { useEffect, useState, useRef } from "react";
import { Button, Form, Spinner, Alert } from "react-bootstrap";
import { Send, Clock, PersonFill, Robot, Magic } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import "./ChatContainer.css";
import removeMd from 'remove-markdown';

const ChatContainer = () => {
    const { chatId } = useParams();
    const { t } = useTranslation();
    const { darkMode } = useTheme();

    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
    const [error, setError] = useState(null);

    const messagesContainerRef = useRef(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        if (messagesContainerRef.current && messagesEndRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        if (!chatId) return;

        const loadMessages = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5199/chat/${chatId}/messages`
                );

                if (!response.ok) {
                    throw new Error("Failed to load messages");
                }

                const data = await response.json();

                const formatted = data.map(m => ({
                    text: removeMd(m.text),
                    type: m.type === "userMessage" ? "sent" : "received",
                    timestamp: m.date
                }));

                setMessages(formatted);
            } catch (err) {
                console.error(err);
                setError(t("chat.error", "Failed to load chat messages"));
            }
        };

        loadMessages();
    }, [chatId, t]);

    useEffect(() => {
        setTimeout(scrollToBottom, 5);
    }, [messages]);

    const sendMessage = async (text) => {
        const token = Cookies.get("tasty-cookie");

        const response = await fetch(
            `http://localhost:5199/chat/message/${chatId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ text })
            }
        );

        if (!response.ok) {
            throw new Error("Failed to send message");
        }

        return await response.json();
    };

    const handleSendMessage = async () => {
        if (!inputMessage.trim() || isWaitingForResponse) return;

        const userMessage = {
            text: inputMessage,
            type: "sent",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage("");
        setIsWaitingForResponse(true);
        setError(null);

        try {
            const response = await sendMessage(inputMessage);

            setMessages(prev => [
                ...prev,
                {
                    text: removeMd(response.text),
                    type: "received",
                    timestamp: response.date
                }
            ]);
        } catch (err) {
            console.error(err);
            setError(t("chat.error", "Error sending message"));
        } finally {
            setIsWaitingForResponse(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey && !isWaitingForResponse) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className={`chat-container ${darkMode ? "dark" : ""}`}>
            <div className="messages" ref={messagesContainerRef}>
                {messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message-container ${msg.type}-container`}
                        >
                            <div className={`message ${msg.type}`}>
                                <div className="message-header">
                                    {msg.type === "sent" ? (
                                        <PersonFill />
                                    ) : (
                                        <Robot />
                                    )}
                                </div>

                                <div className="message-content">
                                    <div className="message-text">{msg.text}</div>
                                    <div className="message-time">
                                        <Clock size={12} />
                                        {new Date(msg.timestamp).toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit"
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="empty-chat-message centered-border">
                        <p>Start a conversation with AI Assistant  <Magic /></p>
                        <p>This chat for people who can understand English text (B1 lvl)</p>
                        <p>You can ask in any language but answer you will receive in English</p>
                        
                    </div>
                )}

                {isWaitingForResponse && (
                    <div className="message-container received-container">
                        <div className="message received">
                            <Robot />
                            <Spinner animation="border" size="sm" className="ms-2" />
                        </div>
                    </div>
                )}

                {error && (
                    <Alert
                        variant="danger"
                        className="mt-2"
                        dismissible
                        onClose={() => setError(null)}
                    >
                        {error}
                    </Alert>
                )}

                <div ref={messagesEndRef} />
            </div>

            <div className="input-container">
                <Form.Control
                    as="textarea"
                    rows={1}
                    value={inputMessage}
                    className="message-input"
                    placeholder={t("chat.placeholder", "Type your message...")}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isWaitingForResponse}
                />

                <Button
                    onClick={handleSendMessage}
                    disabled={isWaitingForResponse || !inputMessage.trim()}
                >
                    {isWaitingForResponse ? (
                        <Spinner animation="border" size="sm" />
                    ) : (
                        <Send />
                    )}
                </Button>
            </div>
        </div>
    );
};

export default ChatContainer;