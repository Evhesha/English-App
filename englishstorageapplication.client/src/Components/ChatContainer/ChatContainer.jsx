import React, { useEffect, useState, useRef } from "react";
import { Button, Form, Spinner, Alert } from "react-bootstrap";
import { Send, Clock, PersonFill, Robot, Magic } from "react-bootstrap-icons";
import "./ChatContainer.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeProvider/ThemeProvider";

const ChatContainer = ({
                           messages,
                           setMessages,
                           isWaitingForResponse,
                           setIsWaitingForResponse,
                       }) => {
    const [inputMessage, setInputMessage] = useState("");
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);
    const { t } = useTranslation();
    const { darkMode } = useTheme(); 

    const PostQuestion = async (data) => {
        try {
            const token = Cookies.get("tasty-cookie");
            const decoded = jwtDecode(token);
            const response = await fetch(
                `https://localhost:5199/chat/message/${chatId}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        ...data,
                        userId: decoded.userId
                    }),
                    credentials: "include",
                }
            );
            const result = await response.json();
            console.log("Success:", result);
            return result;
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && !event.shiftKey && !isWaitingForResponse) {
            event.preventDefault();
            handleSendMessage();
        }
    };

    const handleSendMessage = async () => {
        if (!inputMessage.trim() || isWaitingForResponse) return;

        const userMessage = {
            text: inputMessage,
            type: "sent",
            timestamp: new Date(),
        };

        console.log("Sending message:", userMessage);

        setMessages((prev) => [...prev, userMessage]);
        setInputMessage("");
        setIsWaitingForResponse(true);
        setError(null);

        try {
            const response = await PostQuestion({
                question: inputMessage,
                message: inputMessage
            });

            console.log("Response from server:", response);

            const botMessage = {
                text: response.message || response.text || response.answer || t("chat.received", "Received"),
                type: "received",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);

        } catch (error) {
            console.error("Error sending message:", error);

            setMessages((prev) => [...prev, errorMessage]);
            setError(t("chat.error", "Error sending message. Please try again."));
        } finally {
            setIsWaitingForResponse(false);
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className={`chat-container ${darkMode ? "dark" : ""}`}>
            <div className="messages">
                {messages && messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message-container ${msg.type}-container animate__animated animate__fadeIn`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`message ${msg.type}`}>
                                <div className="message-header">
                                    {msg.type === "sent" ? (
                                        <PersonFill className="user-icon" />
                                    ) : (
                                        <Robot className="bot-icon" />
                                    )}
                                </div>
                                <div className="message-content">
                                    <div className="message-text">{msg.text}</div>
                                    <div className="message-time">
                                        <Clock size={12} className="time-icon" />
                                        {msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        }) : new Date().toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="empty-chat-message centered-border">
                        
                        {t("chat.empty", "Start a conversation with AI Assistant")} 
                        <Magic></Magic>
                    </div>
                )}

                {isWaitingForResponse && (
                    <div className="message-container received-container">
                        <div className="message received">
                            <div className="message-header">
                                <Robot className="bot-icon" />
                            </div>
                            <div className="message-content">
                                <div className="message-text typing-indicator">
                                    <Spinner animation="border" size="sm" role="status" />
                                    <span className="ms-2">
                    {t("chat.typing", "AI Assistant is typing...")}
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {error && (
                    <Alert variant="danger" className="mt-2" dismissible onClose={() => setError(null)}>
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
                    placeholder={
                        isWaitingForResponse
                            ? t("chat.waiting", "Waiting for response...")
                            : t("chat.placeholder", "Type your message...")
                    }
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={`message-input ${darkMode ? "dark" : ""}`}
                    disabled={isWaitingForResponse}
                />
                <Button
                    variant="primary"
                    className="send-button"
                    onClick={handleSendMessage}
                    disabled={isWaitingForResponse || !inputMessage.trim()}
                    title={t("chat.sendButton", "Send")}
                >
                    {isWaitingForResponse ? (
                        <Spinner animation="border" size="sm" />
                    ) : (
                        <Send size={20} />
                    )}
                </Button>
            </div>
        </div>
    );
};

export default ChatContainer;