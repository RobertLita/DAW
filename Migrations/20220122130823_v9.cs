using Microsoft.EntityFrameworkCore.Migrations;

namespace proiect_daw.Migrations
{
    public partial class v9 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bodykits_Cars_CarID",
                table: "Bodykits");

            migrationBuilder.AlterColumn<int>(
                name: "CarID",
                table: "Bodykits",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Bodykits_Cars_CarID",
                table: "Bodykits",
                column: "CarID",
                principalTable: "Cars",
                principalColumn: "CarID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bodykits_Cars_CarID",
                table: "Bodykits");

            migrationBuilder.AlterColumn<int>(
                name: "CarID",
                table: "Bodykits",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Bodykits_Cars_CarID",
                table: "Bodykits",
                column: "CarID",
                principalTable: "Cars",
                principalColumn: "CarID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
