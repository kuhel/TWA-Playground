import pageStyles from 'components/page/Page.module.scss';

interface PageProps {
   children: React.ReactNode | React.ReactNode[];
}

const Page = ({ children }: PageProps) => {
   return <div className={pageStyles.page}>{children}</div>;
};

export default Page;
