using KakiuspWebAPI.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data.SqlClient;

namespace KakiuspWebAPI.Controllers
{
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;

        public AuthController(IConfiguration configuration, IAuthService authService)
        {
            _authService = authService;
        }

        [HttpGet]
        [Route("/auth/{login}/{password}")]
        public ActionResult auth(string login, string password)
        {
            return Ok(_authService.Authenticate(login, password));
        }
    }
}
