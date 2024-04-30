using Microsoft.AspNetCore.Mvc;
using ModelPopUp.DAL;

namespace ModelPopUp.Controllers
{
    public class ProductController : Controller
    {
        private readonly MyAppDbContext _context;

        public ProductController(MyAppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }
       
        public JsonResult GetProducts()
           {
             var products = _context.Products.ToList();
             return Json(products);
           }
    }
}
