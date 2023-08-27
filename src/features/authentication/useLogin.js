import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginAPi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginAPi({
        email,
        password,
      }),

    onSuccess: (user) => {
      navigate('/dashboard', { replace: true });
      queryClient.setQueryData(['user'], user.user);
      toast.success('You are successfully logged in');
    },

    onError: (err) => {
      console.log('Error', err);
      toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
}
