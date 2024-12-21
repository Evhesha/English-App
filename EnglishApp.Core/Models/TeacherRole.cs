namespace EnglishApp.Core.Models
{
    public class TeacherRole
    {
        private TeacherRole(Guid id, Guid userId)
        {
            Id = id;
            UserId = userId;
        }

        public Guid Id { get;}
        public Guid UserId { get;}

        public (string Error, TeacherRole Role) Create(Guid id, Guid userId)
        {
            string error = string.Empty;

            // Conditions if

            var role = new TeacherRole(id, userId);

            return (error, role);
        }

    }
}
