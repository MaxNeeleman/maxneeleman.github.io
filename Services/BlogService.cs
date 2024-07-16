// namespace maxneeleman.github.io;

// using Markdig;
// using System.Net.Http;
// using System.Threading.Tasks;

// public class BlogService
// {
//     private readonly HttpClient _httpClient;

//     public BlogService(HttpClient httpClient)
//     {
//         _httpClient = httpClient;
//     }

//     public async Task<string> GetPostHtmlAsync(string filename)
//     {
//         var markdownContent = await _httpClient.GetStringAsync($"Blog/2024/{filename}");
//         var htmlContent = Markdown.ToHtml(markdownContent);
//         return htmlContent;
//     }
// }

