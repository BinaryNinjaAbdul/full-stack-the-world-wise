import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutAPi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutAPi,
    onSuccess: () => {
      navigate('/login', { replace: true });
      queryClient.removeQueries();
      toast.success('You are successfully logged out');
    },
    onError: () => {
      toast.success('There was an error while logging out');
    },
  });

  return { logout, isLoading };
}
