import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from './Skill/Skill';
import { aboutAnim, iconsAnim, nameAnim } from './About.anim';
import { SKILLS } from './About.constants';
import { useChangeDocumentTitle } from '../../helpers/useChangeDocumentTitle';

export default function About({ pageTitle }) {
	useChangeDocumentTitle(pageTitle);

	return (
		<motion.section className='about' variants={aboutAnim} initial='init' animate='anim' exit='end'>
			<motion.h3 variants={iconsAnim}>Hi Dear, my name is</motion.h3>
			<motion.h2 variants={nameAnim}>Oleh Davydenko</motion.h2>
			<motion.h5 variants={iconsAnim}>- Senior Web Developer @ 2015 -</motion.h5>

			<motion.div className='skillsContainer' variants={iconsAnim}>
				{SKILLS.map((skill) => (
					<Skill key={skill.name} name={skill.name} icon={skill.icon} />
				))}
			</motion.div>
		</motion.section>
	);
}
