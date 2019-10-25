using Microsoft.EntityFrameworkCore.Migrations;

namespace NormativeControl.Migrations
{
    public partial class emailnotification : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsEmailNotification",
                table: "Work",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsEmailNotification",
                table: "Work");
        }
    }
}
