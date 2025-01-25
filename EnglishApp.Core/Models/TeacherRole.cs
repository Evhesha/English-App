namespace EnglishApp.Core.Models
{
    public class TeacherRole
    {
        private TeacherRole(Guid id, Guid userId)
        {
            Id = id;
            UserId = userId;
        }

        public Guid Id { get; set;  }
        public Guid UserId { get; set;  }

        public static (TeacherRole TeacherRole, string Error) Create(Guid id, Guid userId)
        {
            string error = string.Empty;

            var role = new TeacherRole(id, userId);

            return (role, error);
        }
    }
}
