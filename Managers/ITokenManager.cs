using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;

namespace proiect_daw.Managers
{
    public interface ITokenManager
    {
        Task<string> CreateToken(User user);
    }
}
