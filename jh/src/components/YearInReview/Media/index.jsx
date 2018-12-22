import React from 'react';
import Helmet from 'react-helmet';
import { HeadingOne, Paragraph, Card, Row, Col, Stats } from '../../../shared';
import nineNine from './images/brooklyn-nine-nine.jpg';
import dirkGently from './images/dirk-gently.jpg';
import theExpanse from './images/the-expanse.jpg';
import lostInSpace from './images/lost-in-space.jpg';
import MediaBox from './MediaBox';

const Media = () => {
  return (
    <>
      <Helmet>
        <script src="https://apis.google.com/js/platform.js" />
      </Helmet>
      <div id="media" />
      <HeadingOne center mb="2rem" mt="2rem">
        <span role="img" aria-label="related-emoji">
          🎞
        </span>{' '}
        Media{' '}
        <span role="img" aria-label="related-emoji">
          🎞
        </span>
      </HeadingOne>

      <Row justifyContent="space-evenly" gutter="1rem">
        <Col xs={12} md={6} lg={6} order={{ xs: 2, lg: 1 }}>
          <Card header title="Spotify" pt={0} pb={0}>
            <Stats
              title="MINUTES STREAMED"
              metric="36,526"
              fact={`(${Math.round(35526 / 60 / 24)} days)`}
            />
            <Paragraph bold mb="1rem">
              TOP ARTISTS
            </Paragraph>
            <Row>
              <Col xs={12} md={6}>
                <MediaBox
                  type="spotify"
                  entity="D-Sturb"
                  src="https://i1.sndcdn.com/avatars-000217228865-9vcuwh-t500x500.jpg"
                />
                <MediaBox
                  type="spotify"
                  entity="Lowercase Noises"
                  src="https://i1.sndcdn.com/avatars-000398250153-0t1oqz-t500x500.jpg"
                />
                <MediaBox
                  type="spotify"
                  entity="Wasted Penguinz"
                  src="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/48059008_10156070875292810_3480232912144564224_n.jpg?_nc_cat=104&_nc_ht=scontent-syd2-1.xx&oh=917e6605904610493ed058e93ccb5864&oe=5CA34091"
                />
              </Col>
              <Col xs={12} md={6}>
                <MediaBox
                  type="spotify"
                  entity="Stereotuners"
                  src="https://i1.sndcdn.com/avatars-000050029283-ndthck-t500x500.jpg"
                />
                <MediaBox
                  type="spotify"
                  entity="Atmozfears"
                  src="https://pbs.twimg.com/profile_images/1031307039061012481/xJKYYBZs_400x400.jpg"
                />
                <MediaBox
                  type="spotify"
                  entity="Nosia"
                  src="https://i1.sndcdn.com/avatars-000451809714-n5njwk-t500x500.jpg"
                />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={6} order={{ xs: 2, lg: 1 }} gutter="1rem">
          <Card
            header
            title="Netflix"
            pt={0}
            pb={0}
            style={{ minHeight: '526px' }}
          >
            <Stats title="EPISODES WATCHED" metric="367" />
            <Stats
              title="EST HOURS WATCHED"
              metric="146"
              fact="(6 full days binged)"
            />
            <Paragraph bold mb="1rem">
              TOP PICKS
            </Paragraph>
            <Row>
              <Col xs={12} md={6}>
                <MediaBox
                  type="netflix"
                  entity="Dirk Gently"
                  src={dirkGently}
                />
                <MediaBox
                  type="netflix"
                  entity="Brooklyn Nine-Nine"
                  src={nineNine}
                />
              </Col>
              <Col xs={12} md={6}>
                <MediaBox
                  type="netflix"
                  entity="The Expanse"
                  src={theExpanse}
                />
                <MediaBox
                  type="netflix"
                  entity="Lost In Space"
                  src={lostInSpace}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Card header title="YouTube" pt={0}>
        <Row mb="1rem">
          <Col lg={6} mt="2rem">
            <div
              class="g-ytsubscribe"
              data-channel="SquizzFilms"
              data-layout="full"
              data-count="default"
            />
            <Stats
              title="WATCH TIME (mins)"
              metric="152K"
              fact="(more than the duration of winter)"
            />
            <Stats title="VIEWS" metric="75K" />
            <Stats title="SUBSCRIBERS" metric="-116" />
          </Col>
          <Col lg={6} mt="2rem">
            <div
              class="g-ytsubscribe"
              data-channelid="UCOdFl-yPqum9818JPntA6DQ"
              data-layout="full"
              data-count="default"
            />
            <Stats
              title="WATCH TIME (mins)"
              metric="60K"
              fact="(part-time for a year at 20 hrs a week)"
            />
            <Stats title="VIEWS" metric="40K" />
            <Stats title="SUBSCRIBERS" metric="+304" />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Media;
