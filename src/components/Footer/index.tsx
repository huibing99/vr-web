import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';

const Footer: React.FC = () => {
  const defaultMessage = 'TJU VR';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
    />
  );
};

export default Footer;
