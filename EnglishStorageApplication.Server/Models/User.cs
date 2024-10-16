namespace EnglishStorageApplication.Server.Models
{
    public class User
    {
        public const int MAX_PASSWORD_LENGTH = 6;

        // конструктор является приватным, т.к. хотим провести валидацию данных
        // и для этого используем метод с возвратом кортежа
        private User(Guid id, string name, string email, string password)
        {
            Id = id;
            Name = name;
            Email = email;
            Password = password;
        }

        // убираем set для инкапсуляции, данные задаем через конструктор
        public Guid Id { get; }
        public string Name { get; } = string.Empty;
        public string Email { get; } = string.Empty;
        public string Password { get; } = string.Empty;

        public static (User User, string Error) Create(Guid id, string  name, string email, string password)
        {
            var error = string.Empty;

            // добавление валидации
            if (string.IsNullOrEmpty(password) || password.Length < MAX_PASSWORD_LENGTH) 
            {
                error = "Password length can't be empty or less than 6 symbols";
            }
            if (string.IsNullOrEmpty(name))
            {
                error = "Name can't be empty";
            }

            var user = new User(id, name, email, password);

            return (user, error);
        }

    }
}
