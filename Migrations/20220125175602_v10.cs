using Microsoft.EntityFrameworkCore.Migrations;

namespace proiect_daw.Migrations
{
    public partial class v10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "Bodykits");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "Bodykits",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
