using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EnglishApp.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class PassAndPublicyTestsMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsPublic",
                table: "Tests",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "PassCount",
                table: "Tests",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsPublic",
                table: "Tests");

            migrationBuilder.DropColumn(
                name: "PassCount",
                table: "Tests");
        }
    }
}
