using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace FitnessProjectTwo.Data.Migrations
{
    public partial class corrected_subtopic : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Topics_Forums_ForumId",
                table: "Topics");

            migrationBuilder.DropIndex(
                name: "IX_Topics_ForumId",
                table: "Topics");

            migrationBuilder.DropColumn(
                name: "ForumId",
                table: "Topics");

            migrationBuilder.DropTable(
                name: "Forums");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Forums",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true),
                    Subject = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Forums", x => x.Id);
                });

            migrationBuilder.AddColumn<int>(
                name: "ForumId",
                table: "Topics",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Topics_ForumId",
                table: "Topics",
                column: "ForumId");

            migrationBuilder.AddForeignKey(
                name: "FK_Topics_Forums_ForumId",
                table: "Topics",
                column: "ForumId",
                principalTable: "Forums",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
