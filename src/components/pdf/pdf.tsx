import { resumeConfig } from '@config/resume-config';
import { ProfessionalExperience, allSkills, personal } from '@content';
import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import path from 'node:path';
import { ReactNode } from 'react';
import Html from 'react-pdf-html';
import CircleBriefcase from '@src/components/pdf/icons/circle-briefcase';
import CircleCheck from '@src/components/pdf/icons/circle-check';
import CircleIdCard from '@src/components/pdf/icons/circle-id-card';
import CirclePaintbrush from '@src/components/pdf/icons/circle-paintbrush';
import CircleUser from '@src/components/pdf/icons/circle-user';
import GitHub from '@src/components/pdf/icons/github';
import { getAccentColor, getNeutralColor } from '@src/helpers/colors';
import {
  fullName,
  getFormattedDate,
  sortedProfessionalExperiences,
  sortedProjects,
} from '@src/helpers/utilities';

const theme = resumeConfig.pdfTheme;

// 한글이 들어가므로 본문은 나눔고딕으로 그린다. 기울임은 글꼴이 없어 보통체로 대신한다.
Font.register({
  family: 'Nanum Gothic',
  fonts: [
    {
      fontStyle: 'normal',
      fontWeight: 400,
      src: path.join(process.cwd(), 'src/fonts/NanumGothic-Regular.ttf'),
    },
    {
      fontStyle: 'italic',
      fontWeight: 400,
      src: path.join(process.cwd(), 'src/fonts/NanumGothic-Regular.ttf'),
    },
    {
      fontStyle: 'normal',
      fontWeight: 700,
      src: path.join(process.cwd(), 'src/fonts/NanumGothic-Bold.ttf'),
    },
    {
      fontStyle: 'italic',
      fontWeight: 700,
      src: path.join(process.cwd(), 'src/fonts/NanumGothic-Bold.ttf'),
    },
  ],
});

Font.register({
  family: 'JetBrains Mono',
  fonts: [
    {
      fontStyle: 'normal',
      fontWeight: 500,
      src: path.join(process.cwd(), 'src/fonts/JetBrainsMono-Medium.ttf'),
    },
  ],
});

const hyphenationCallback = (word: string): string[] => {
  // don't hyphenate
  return [word];
};

Font.registerHyphenationCallback(hyphenationCallback);

Font.registerEmojiSource({
  format: 'png',
  url: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/',
});

const fontSizes = {
  xl: 17,
  l: 15,
  m: 12,
  s: 10.5,
  xs: 9.5,
  xxs: 8.5,
};

const spacers = {
  0: '4px',
  1: '6px',
  2: '8px',
  3: '10px',
  4: '12px',
  5: '14px',
  6: '16px',
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'stretch',
    backgroundColor: getNeutralColor(1, theme),
    color: getNeutralColor(12, theme),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    fontFamily: 'Nanum Gothic',
    fontSize: fontSizes.xxs,
    justifyContent: 'flex-start',
    lineHeight: 1.38,
  },
  sidebar: {
    alignSelf: 'stretch',
    backgroundColor: getNeutralColor(3, theme),
    display: 'flex',
    color: getNeutralColor(12, theme),
    flexBasis: '32%',
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 1,
  },
  sidebarContent: { padding: spacers[4] },
  header: {
    backgroundColor: getAccentColor(6, theme),
    color: getNeutralColor(12, theme),
    padding: `${spacers[6]} ${spacers[4]}`,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: spacers[3],
  },
  headerTitle: { fontSize: fontSizes.xl, fontWeight: 700 },
  headerSubtitle: { fontSize: fontSizes.s, fontWeight: 700 },
  main: {
    alignSelf: 'stretch',
    display: 'flex',
    flexBasis: '68%',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 0,
    padding: spacers[4],
  },
  section: { marginBottom: spacers[4] },
  sectionHeading: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: fontSizes.m,
    fontWeight: 700,
    gap: spacers[1],
    marginBottom: spacers[1],
  },
  sectionParagraph: {
    fontWeight: 400,
    margin: 0,
  },
  itemHeading: {
    fontSize: fontSizes.s,
    fontWeight: 700,
    marginBottom: spacers[1],
    marginTop: spacers[3],
  },
  metaRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '2px',
  },
  metaLabel: { fontWeight: 700 },
  bold: { fontWeight: 700 },
  a: {
    color: getAccentColor(11, theme),
    textDecoration: 'underline',
  },
  list: {
    marginTop: spacers[1],
  },
  code: {
    backgroundColor: getNeutralColor(4, theme),
    borderRadius: '3px',
    fontFamily: 'JetBrains Mono',
    fontWeight: 500,
    paddingHorizontal: spacers[2],
  },
  icons: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacers[0],
    marginTop: spacers[1],
  },
  iconRow: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: fontSizes.xxs,
    gap: spacers[1],
  },
  small: { fontSize: fontSizes.xxs },
});

const htmlProperties = {
  style: { fontSize: fontSizes.xxs },
  stylesheet: {
    a: styles.a,
    p: styles.sectionParagraph,
    ul: styles.list,
    ol: styles.list,
    li: { marginBottom: '2px' },
    code: styles.code,
    strong: styles.bold,
  },
};

interface ProfessionExperienceProperties {
  professionalExperience: ProfessionalExperience;
}

function ProfessionalExperienceDetails({
  professionalExperience,
}: ProfessionExperienceProperties): ReactNode {
  return (
    <View style={styles.metaRow}>
      <Text style={styles.small}>
        {professionalExperience.titles.map((title, index) => (
          <Text key={index}>
            {index > 0 ? ' / ' : ''}
            {title.title}, {getFormattedDate(title.startDate)} ~{' '}
            {title.endDate ? getFormattedDate(title.endDate) : 'ing'}
          </Text>
        ))}
      </Text>
    </View>
  );
}

export default function PDF(): ReactNode {
  const year = new Date().getFullYear();

  return (
    <Document
      author={fullName}
      title={`${fullName} 이력서, ${year.toString()}`}
      language="ko"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.sidebar}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{fullName}</Text>
            <Text style={styles.headerSubtitle}>{personal.title}</Text>
          </View>
          <View style={styles.sidebarContent}>
            <View style={styles.section}>
              <View style={styles.sectionHeading}>
                <CircleUser size={fontSizes.m} />
                <Text>Introduction</Text>
              </View>
              <Html {...htmlProperties}>{personal.body.html}</Html>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeading}>
                <CircleIdCard size={fontSizes.m} />
                <Text>Personal Information</Text>
              </View>
              {personal.location && (
                <View style={styles.metaRow}>
                  <Text style={styles.metaLabel}>Location : </Text>
                  <Text>{personal.location}</Text>
                </View>
              )}
              <View style={styles.icons}>
                {personal.email && (
                  <View style={styles.iconRow}>
                    <Text style={styles.metaLabel}>Email : </Text>
                    <Link href={`mailto:${personal.email}`} style={styles.a}>
                      {personal.email}
                    </Link>
                  </View>
                )}
                {personal.githubUrl && (
                  <View style={styles.iconRow}>
                    <GitHub size={fontSizes.xs} />
                    <Link href={personal.githubUrl} style={styles.a}>
                      {personal.githubUrl}
                    </Link>
                  </View>
                )}
                {personal.blogUrl && (
                  <View style={styles.iconRow}>
                    <CirclePaintbrush size={fontSizes.xs} />
                    <Link href={personal.blogUrl} style={styles.a}>
                      {personal.blogUrl}
                    </Link>
                  </View>
                )}
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeading}>
                <CircleCheck size={fontSizes.m} />
                <Text>Tech Stack</Text>
              </View>
              {allSkills.map((skill) => (
                <View key={skill._id}>
                  {allSkills.length > 1 && (
                    <Text style={styles.itemHeading}>{skill.title}</Text>
                  )}
                  <Html {...htmlProperties}>{skill.body.html}</Html>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <CirclePaintbrush size={fontSizes.m} />
              <Text>Project</Text>
            </View>
            {sortedProjects.map((project) => (
              <View key={project._id} wrap={false}>
                <Text style={styles.itemHeading}>{project.title}</Text>
                <View style={styles.metaRow}>
                  <Text style={styles.metaLabel}>일정 : </Text>
                  <Text>{project.period}</Text>
                </View>
                <View style={styles.metaRow}>
                  <Text style={styles.metaLabel}>참여 인원 : </Text>
                  <Text>{project.team}</Text>
                </View>
                {project.service && (
                  <View style={styles.metaRow}>
                    <Text style={styles.metaLabel}>서비스 : </Text>
                    <Text>{project.service}</Text>
                  </View>
                )}
                <Html {...htmlProperties}>{project.body.html}</Html>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <CircleBriefcase size={fontSizes.m} />
              <Text>Companies &amp; Experiences</Text>
            </View>
            {sortedProfessionalExperiences.map((professionalExperience) => (
              <View key={professionalExperience._id} wrap={false}>
                <Text style={styles.itemHeading}>
                  {professionalExperience.organization}
                </Text>
                <ProfessionalExperienceDetails
                  professionalExperience={professionalExperience}
                />
                <Html {...htmlProperties}>
                  {professionalExperience.body.html}
                </Html>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}
