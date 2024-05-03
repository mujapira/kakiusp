using KakiuspWebAPI.Services.Interfaces;
using KakiuspWebAPI.Services;

namespace KakiuspWebAPI
{
    public static class DependencyInjectionConfig
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IAuthService, AuthService>();
        }
    }
}
