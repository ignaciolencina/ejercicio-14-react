import { useQuery } from "@tanstack/react-query";
import { getBlogsFn } from "../../api/blogs";
import BlogCard from "../../components/Home/BlogCard";

const HomeView = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogsFn,
  });

  if (isLoading) {
    return <p className='mt-3 text-center'>Cargando entradas...</p>;
  }

  if (isError) {
    return (
      <div className='alert alert-danger'>
        Ocurrió un error leyendo las entradas de blog
      </div>
    );
  }

  if (blogs && blogs.length === 0) {
    return (
      <div className='alert alert-danger'>
        No se encontraron entradas de blog para mostrar
      </div>
    );
  }

  return (
    <section className='row g-4'>
      {blogs.map((blog) => (
        <article className='col-12 col-md-4 col-lg-3' key={blog.id}>
          <BlogCard blog={blog} />
        </article>
      ))}
    </section>
  );
};
export default HomeView;
