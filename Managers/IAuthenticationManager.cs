using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Models;

namespace proiect_daw.Managers
{
    public interface IAuthenticationManager
    {
        Task Signup(SignupUserModel signupUserModel);
        Task<TokenModel> Login(LoginUserModel loginUserModel);
    }
}
