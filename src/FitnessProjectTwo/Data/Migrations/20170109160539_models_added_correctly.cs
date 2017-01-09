using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FitnessProjectTwo.Data.Migrations
{
    public partial class models_added_correctly : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Topics_TopicId",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Comments_TopicId",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "TopicId",
                table: "Comments");

            migrationBuilder.AddColumn<int>(
                name: "TopicId",
                table: "SubTopics",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_SubTopics_TopicId",
                table: "SubTopics",
                column: "TopicId");

            migrationBuilder.AddForeignKey(
                name: "FK_SubTopics_Topics_TopicId",
                table: "SubTopics",
                column: "TopicId",
                principalTable: "Topics",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SubTopics_Topics_TopicId",
                table: "SubTopics");

            migrationBuilder.DropIndex(
                name: "IX_SubTopics_TopicId",
                table: "SubTopics");

            migrationBuilder.DropColumn(
                name: "TopicId",
                table: "SubTopics");

            migrationBuilder.AddColumn<int>(
                name: "TopicId",
                table: "Comments",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Comments_TopicId",
                table: "Comments",
                column: "TopicId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Topics_TopicId",
                table: "Comments",
                column: "TopicId",
                principalTable: "Topics",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
