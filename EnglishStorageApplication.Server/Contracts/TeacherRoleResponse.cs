using System.Security.Cryptography.X509Certificates;

namespace EnglishStorageApplication.Server.Contracts;

public record TeacherRoleResponse(
    Guid id,
    Guid userId
    );

public record TeacherRoleRequest(
    Guid userId
    );