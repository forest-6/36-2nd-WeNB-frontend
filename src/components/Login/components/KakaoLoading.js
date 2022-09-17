import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../../../config';

const KakaoLoading = () => {
  let code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    const goToMain = () => {
      navigate('/');
    };
    fetch(`${BASE_URL}/kakao/auth?code=${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'success') {
          localStorage.setItem('TOKEN', data.token);
          goToMain();
          alert('로그인 성공');
        } else {
          goToMain();
          alert('로그인 실패');
        }
      });
  }, [code, navigate]);
};

export default KakaoLoading;
