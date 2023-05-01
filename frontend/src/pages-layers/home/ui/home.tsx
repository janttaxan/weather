import { Button } from 'shared/ui/button';
import { Page } from 'widgets/page';

export const Home = () => {
  return (
    <Page context={{ user: null }}>
      <div>
        init project
        <Button text='button' />
      </div>
    </Page>
  );
};
