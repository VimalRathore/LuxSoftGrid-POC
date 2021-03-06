using System.Collections.Generic;
using Server.DTO;
using Server.Models;

namespace Server.ViewModels
{
    public class EmployeeViewModel
    {
        public EmployeeViewModel(List<Employee> employees, int pageNumber, int recordsPerPage, int totalCount, int totalPages)
        {
            Employees = employees;
            Pagination.CurrentPage = pageNumber;
            Pagination.ItemsPerPage = recordsPerPage;
            Pagination.TotalItems = totalCount;
            Pagination.TotalPages = totalPages;
        }
        public Pagination Pagination { get; set; } = new Pagination();
        public List<Employee> Employees { get; set; } = new List<Employee>();
    }

    public class Pagination
    {
        public int CurrentPage { get; set; }
        public int ItemsPerPage { get; set; }
        public int TotalItems { get; set; }
        public int TotalPages { get; set; }
    }
}