using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using NormativeControl.Models;

namespace NormativeControl
{
    public class AuthOptions
    {
        public const string ISSUER = "NormcontrolService";
        public const string AUDIENCE = "https://localhost:44380";
        public const string KEY = "NORMATIVE_CONTROL_URFU_PROJECT_$45";
        public const int LIFETIME_IN_MINUTE = 1440;

        public const string SALT_STRING = "salt_of_project_URFU_$45";

        public static SymmetricSecurityKey GetSecurityKey() => new SymmetricSecurityKey(Encoding.UTF8.GetBytes(KEY));

        private static readonly HashAlgorithm Algorithm = new SHA256CryptoServiceProvider();

        private static readonly byte[] Salt = Encoding.UTF8.GetBytes(SALT_STRING);

        public static string ComputeHash(string password)
        {
            var bytePassword = Encoding.UTF8.GetBytes(password);

            var saltedPassword = new byte[bytePassword.Length + Salt.Length];
            Salt.CopyTo(saltedPassword, 0);
            bytePassword.CopyTo(saltedPassword, Salt.Length);

            var hashedBytes = Algorithm.ComputeHash(saltedPassword);

            return BitConverter.ToString(hashedBytes);
        }

        public static string GetJWT(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, user.Email),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role)
            };

            var nowTime = DateTime.Now;

            var jwt = new JwtSecurityToken(
                issuer: ISSUER,
                audience: AUDIENCE,
                notBefore: nowTime,
                claims: claims,
                expires: nowTime.Add(TimeSpan.FromMinutes(LIFETIME_IN_MINUTE)),
                signingCredentials: new SigningCredentials(GetSecurityKey(), SecurityAlgorithms.HmacSha256));

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return encodedJwt;
        }
    }
}
