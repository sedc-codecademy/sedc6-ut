using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorLib
{
    public class DbCalculatorEngine : ICalculatorEngine, IDisposable
    {
        private SqlConnection sqlConnection;

        public DbCalculatorEngine()
        {
            sqlConnection = new SqlConnection("Server=.;Database=BadCalculator;Trusted_Connection=True;");
            sqlConnection.Open();
        }

        public int Add(int first, int second)
        {
            using (var command = new SqlCommand())
            {
                command.Connection = sqlConnection;
                command.CommandText = $"insert into Operations (First, Second, Operation) values ({first}, {second}, '+');select @@IDENTITY";
                var id = command.ExecuteScalar();

                command.CommandText = $"update Operations set Result=First+Second where ID={id}; select Result from Operations where ID={id}";
                var result = (long)command.ExecuteScalar();
                return (int)result;
            }
        }

        public int Multiply(int first, int second)
        {
            using (var command = new SqlCommand())
            {
                command.Connection = sqlConnection;
                command.CommandText = $"insert into Operations (First, Second, Operation, Result) values ({first}, {second}, '*');select @@IDENTITY";
                var id = (int)command.ExecuteScalar();

                command.CommandText = $"update Operations set Result=First*Second where ID={id}; select ID from Operations where ID={id}";
                var result = (long)command.ExecuteScalar();
                return (int)result;
            }
        }

        public int Subtract(int first, int second)
        {
            using (var command = new SqlCommand())
            {
                command.Connection = sqlConnection;
                command.CommandText = $"insert into Operations (First, Second, Operation) values ({first}, {second}, '-');select @@IDENTITY";
                var id = command.ExecuteScalar();

                command.CommandText = $"update Operations set Result=First-Second where ID={id}; select Result from Operations where ID={id}";
                var result = (long)command.ExecuteScalar();
                return (int)result;
            }
        }

        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    sqlConnection.Dispose();
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~DbCalculator() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        public void Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }
        #endregion
    }
}
