namespace KakiuspWebAPI.Services.Interfaces
{
    public interface IAuthService
    {
        public string Authenticate(string email, string password);
    }
}
