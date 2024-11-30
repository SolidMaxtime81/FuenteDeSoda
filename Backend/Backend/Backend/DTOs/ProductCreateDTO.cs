using System.ComponentModel.DataAnnotations;

namespace Backend.DTOs
{
    public class ProductCreateDTO
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public decimal Price { get; set; }

        public string? Description { get; set; }

    }
}
