using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EnglishApp.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class LessonPublicProperty : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isPublic",
                table: "Lessons",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isPublic",
                table: "Lessons");
        }
    }
}
