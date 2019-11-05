using Microsoft.EntityFrameworkCore.Migrations;

namespace NormativeControl.Migrations
{
    public partial class updDataContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Error_Work_WorkId",
                table: "Error");

            migrationBuilder.DropForeignKey(
                name: "FK_Work_Users_StudentId",
                table: "Work");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Work",
                table: "Work");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Error",
                table: "Error");

            migrationBuilder.RenameTable(
                name: "Work",
                newName: "Works");

            migrationBuilder.RenameTable(
                name: "Error",
                newName: "Errors");

            migrationBuilder.RenameIndex(
                name: "IX_Work_StudentId",
                table: "Works",
                newName: "IX_Works_StudentId");

            migrationBuilder.RenameIndex(
                name: "IX_Error_WorkId",
                table: "Errors",
                newName: "IX_Errors_WorkId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Works",
                table: "Works",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Errors",
                table: "Errors",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Errors_Works_WorkId",
                table: "Errors",
                column: "WorkId",
                principalTable: "Works",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Works_Users_StudentId",
                table: "Works",
                column: "StudentId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Errors_Works_WorkId",
                table: "Errors");

            migrationBuilder.DropForeignKey(
                name: "FK_Works_Users_StudentId",
                table: "Works");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Works",
                table: "Works");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Errors",
                table: "Errors");

            migrationBuilder.RenameTable(
                name: "Works",
                newName: "Work");

            migrationBuilder.RenameTable(
                name: "Errors",
                newName: "Error");

            migrationBuilder.RenameIndex(
                name: "IX_Works_StudentId",
                table: "Work",
                newName: "IX_Work_StudentId");

            migrationBuilder.RenameIndex(
                name: "IX_Errors_WorkId",
                table: "Error",
                newName: "IX_Error_WorkId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Work",
                table: "Work",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Error",
                table: "Error",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Error_Work_WorkId",
                table: "Error",
                column: "WorkId",
                principalTable: "Work",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Work_Users_StudentId",
                table: "Work",
                column: "StudentId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
