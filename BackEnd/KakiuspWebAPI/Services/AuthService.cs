using KakiuspWebAPI.Models;
using KakiuspWebAPI.Services.Interfaces;
using KakiuspWebAPI.Utils;
using MySql.Data.MySqlClient;
using System.Data.SqlClient;

namespace KakiuspWebAPI.Services
{
    public class AuthService : IAuthService
    {

        private readonly TokenService _tokenService;
        private readonly IConfiguration _configuration;
        public AuthService(TokenService tokenService, IConfiguration configuration)
        {
            _tokenService = tokenService;
            _configuration = configuration;
        }

        public string Authenticate(string email, string password)
        {
            var user = new UserModel();
            string queryString = "SELECT name, email, role FROM users WHERE email = @email AND password = @password;";

            using (MySqlConnection connection = new MySqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                MySqlCommand command = new MySqlCommand(queryString, connection);
                command.Parameters.AddWithValue("@email", email);
                command.Parameters.AddWithValue("@password", password);

                connection.Open();

                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        user.Name = (string)reader["name"];
                        user.Email = (string)reader["email"];
                        user.Role = (string)reader["role"];
                    }
                }
            }


            if (string.IsNullOrEmpty(user.Name))
            {
                return "";
            }

            var tokenJwt = _tokenService.GenerateToken(user.Name, user.Email, user.Role);

            return tokenJwt;
        }
    }
}
