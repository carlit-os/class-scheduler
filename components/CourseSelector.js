import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import TermSelector from "./TermSelector";
import CourseList from "./CourseList";
import Course from "./Course"
import { hasConflict,getCourseTerm, getCourseNumber, terms} from '../utils/course';


const CourseSelector = ({courses, view}) => {
    const [selected, setSelected] = useState([]); //at first no courses, will be selected
  
    const toggle = course => setSelected(selected => (
        selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
    ));

    return (
      <View style={styles.courseList}>
        { 
          courses.map(course => (  //mapping was moved here from CourseList.js in commits prior to conflicts
            <Course key={course.id} course={course} view={view}
              isDisabled={hasConflict(course, selected)}
              select={toggle}
              isSelected={selected.includes(course)}
            />
          ))
        }
      </View>
    );
};
  

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    
});

export default CourseSelector;