import { useMutation, useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { deleteBlogFn } from '../../api/blogs';
import { toast } from 'sonner';
import Swal from 'sweetalert2';

const AdminTableRow = (props) => {
    const { blog, index } = props;

    const { setBlogToEdit } = useBlog();
  
    // ---------------------------------------------
    // RQ
    // ---------------------------------------------
  
    const queryClient = useQueryClient();
  
    const { mutate: deleteBlog } = useMutation({
      mutationFn: deleteBlogFn,
      onSuccess: () => {
        toast.dismiss();
        toast.success('Entrada eliminada');
  
        // Avisarle a la tabla que se debe actualizar
        queryClient.invalidateQueries({
          queryKey: ['blogs'],
        });
      },
      onError: (e) => {
        toast.dismiss();
        toast.error(e.message);
      },
    });
  
    // ---------------------------------------------
    // HANDLERS
    // ---------------------------------------------
  
    const handleEdit = () => {
      setBlogToEdit(blog);
    };
  
    const handleDelete = async () => {
      const action = await Swal.fire({
        title: 'Atención',
        icon: 'info',
        html: `¿Estás seguro que deseas eliminar el blog <b>"${blog.title}"</b>?`,
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'No, cancelar',
        showCancelButton: true,
      });
  
      if (action.isConfirmed) {
        toast.loading('Eliminando entrada...');
        deleteBlog(blog.id);
      }
    };
  
    // ---------------------------------------------
    // RENDER
    // ---------------------------------------------
  
    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          <img
            alt={blog.title}
            className='admin-table-image'
            src={blog.imageUrl}
          />
        </td>
        <td>{blog.title}</td>
        <td className='text-end'>
          <button className='btn btn-warning me-2' onClick={handleEdit}>
            Editar
          </button>
          <button className='btn btn-danger' onClick={handleDelete}>
            Eliminar
          </button>
        </td>
      </tr>
    );
}
export default AdminTableRow

AdminTableRow.propTypes = {
    blog: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
    index: PropTypes.number.isRequired,
  };