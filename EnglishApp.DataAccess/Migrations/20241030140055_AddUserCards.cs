using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EnglishStorageApplication.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddUserCards : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UsersCards",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    NameOfUsersCard = table.Column<string>(type: "text", nullable: false),
                    UserCardData = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsersCards", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UsersCards");
        }
    }
}
