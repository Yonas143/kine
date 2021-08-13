/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import bulb from 'assets/images/icons/bulb.png';
import dart from 'assets/images/icons/dart.png';
import rocket from 'assets/images/icons/rocket.png';
import trophy from 'assets/images/icons/trophy.png';

const data = [
  {
    id: 1,
    icon: bulb,
    title: 'Dialogue and partnerships',
    description: 'Setween the stakeholders (public sector, private sector and civil society) fosters ownership of these strategies, engenders them more implementable (by better addressing SME needs), making them politically credible, and sustainable.',
  },
  {
    id: 2,
    icon: dart,
    title: 'Access and integration',
    description: 'into local, national, and global markets require substantial investments in sustainable institutional and physical infrastructure development and service delivery to SMEs in all areas, including those that are rural and/or remote.',
  },
  {
    id: 3,
    icon: rocket,
    title: 'Enhancing womens ability',
    description: 'to participate in SME development should be taken into account at every level, as women account for an important share of private sector activity and contribute most to poverty reduction.',
  },
  {
    id: 4,
    icon: trophy,
    title: 'Award history',
    description: `Keep secure with fluent 2-factor authentication full activity.`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="ultimate-feature" variant="section.ultimateFeature">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Its Time To Bootstrap Africa"
          description="African for African To African "
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  features: {
    gap: ['35px 60px', 60, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(4, 1fr)',
    ],
  },
};
