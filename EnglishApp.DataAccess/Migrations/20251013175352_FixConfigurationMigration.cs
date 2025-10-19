using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EnglishApp.DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class FixConfigurationMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Images",
                table: "Lessons");

            migrationBuilder.RenameColumn(
                name: "ArticleId",
                table: "Likes",
                newName: "LessonId");

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

            migrationBuilder.CreateTable(
                name: "LessonImages",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    LessonId = table.Column<Guid>(type: "uuid", nullable: false),
                    ImageURL = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LessonImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LessonImages_Lessons_LessonId",
                        column: x => x.LessonId,
                        principalTable: "Lessons",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UsersStudyResults_UserId",
                table: "UsersStudyResults",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UsersStudyResults_UserId1",
                table: "UsersStudyResults",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_UsersCards_UserId",
                table: "UsersCards",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UsersCards_UserId1",
                table: "UsersCards",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Likes_LessonId",
                table: "Likes",
                column: "LessonId");

            migrationBuilder.CreateIndex(
                name: "IX_LessonImages_LessonId",
                table: "LessonImages",
                column: "LessonId");

            migrationBuilder.AddForeignKey(
                name: "FK_Likes_Lessons_LessonId",
                table: "Likes",
                column: "LessonId",
                principalTable: "Lessons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UsersCards_Users_UserId",
                table: "UsersCards",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UsersCards_Users_UserId1",
                table: "UsersCards",
                column: "UserId1",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_UsersStudyResults_Users_UserId",
                table: "UsersStudyResults",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UsersStudyResults_Users_UserId1",
                table: "UsersStudyResults",
                column: "UserId1",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Likes_Lessons_LessonId",
                table: "Likes");

            migrationBuilder.DropForeignKey(
                name: "FK_UsersCards_Users_UserId",
                table: "UsersCards");

            migrationBuilder.DropForeignKey(
                name: "FK_UsersCards_Users_UserId1",
                table: "UsersCards");

            migrationBuilder.DropForeignKey(
                name: "FK_UsersStudyResults_Users_UserId",
                table: "UsersStudyResults");

            migrationBuilder.DropForeignKey(
                name: "FK_UsersStudyResults_Users_UserId1",
                table: "UsersStudyResults");

            migrationBuilder.DropTable(
                name: "LessonImages");

            migrationBuilder.DropIndex(
                name: "IX_UsersStudyResults_UserId",
                table: "UsersStudyResults");

            migrationBuilder.DropIndex(
                name: "IX_UsersStudyResults_UserId1",
                table: "UsersStudyResults");

            migrationBuilder.DropIndex(
                name: "IX_UsersCards_UserId",
                table: "UsersCards");

            migrationBuilder.DropIndex(
                name: "IX_UsersCards_UserId1",
                table: "UsersCards");

            migrationBuilder.DropIndex(
                name: "IX_Likes_LessonId",
                table: "Likes");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "UsersStudyResults");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "UsersCards");

            migrationBuilder.RenameColumn(
                name: "LessonId",
                table: "Likes",
                newName: "ArticleId");

            migrationBuilder.AddColumn<List<byte[]>>(
                name: "Images",
                table: "Lessons",
                type: "bytea[]",
                nullable: false);
        }
    }
}
