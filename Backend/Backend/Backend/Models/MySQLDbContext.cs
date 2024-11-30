using Backend.Models.Scaffold;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Internal;

namespace Backend.Models
{
    public class MySQLDbContext : FescFuentesodaContext
    {
        //private readonly MySQLSettings _mySQLSettings;
        //public MySQLDbContext(IAppSettingsService appSettingsService)
        //{
          //  _mySQLSettings = appSettingsService.GetMySQLSettings();
        //}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseMySQL("server=localhost;database=fesc_fuentesoda;user=root;password=;");
    }
}