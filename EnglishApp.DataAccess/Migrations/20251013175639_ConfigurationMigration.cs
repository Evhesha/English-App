using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EnglishApp.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class ConfigurationMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UsersCards_Users_UserId1",
                table: "UsersCards");

            migrationBuilder.DropForeignKey(
                name: "FK_UsersStudyResults_Users_UserId1",
                table: "UsersStudyResults");

            migrationBuilder.DropIndex(
                name: "IX_UsersStudyResults_UserId1",
                table: "UsersStudyResults");

            migrationBuilder.DropIndex(
                name: "IX_UsersCards_UserId1",
                table: "UsersCards");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "UsersStudyResults");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "UsersCards");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "UserId1",
                table: "UsersStudyResults",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "UserId1",
                table: "UsersCards",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UsersStudyResults_UserId1",
                table: "UsersStudyResults",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_UsersCards_UserId1",
                table: "UsersCards",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_UsersCards_Users_UserId1",
                table: "UsersCards",
                column: "UserId1",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_UsersStudyResults_Users_UserId1",
                table: "UsersStudyResults",
                column: "UserId1",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
