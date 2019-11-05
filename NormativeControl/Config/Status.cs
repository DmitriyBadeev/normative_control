using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NormativeControl.Config
{
    public class Status
    {
        public static readonly string CHECK = "Проверка нормоконтролером";

        public static readonly string PENDING_CORRECTION = "Ожидание исправления";

        public static readonly string PENDING_RECHECK = "Ожидание перепроверки";

        public static readonly string ACCEPTED = "Работа принята";
    }
}
