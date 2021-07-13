using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProductAPI.Models
{
    public class Product
    {
        [Key]
        public int ProductID { get; set; }
        [Column(TypeName ="nvarchar(500)")]
        public string ProductName { get; set; }
        [Column(TypeName = "decimal(30,4)")]
        public double Price { get; set; }
    }
}
