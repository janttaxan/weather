import { Button } from 'shared/ui/button';
import { Page } from 'widgets/page';
import { config } from 'shared/lib/config';

export const Home = () => {
  console.log('config', config);
  return (
    <Page context={{ user: null }}>
      <div>
        init project
        <Button text='button' />
      </div>
    </Page>
  );
};
