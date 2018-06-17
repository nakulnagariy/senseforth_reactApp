import MdAcUnit from 'react-icons/lib/md/ac-unit';
import MdAllInclusive from 'react-icons/lib/md/all-inclusive';
import MdFilterVintage from 'react-icons/lib/md/filter-vintage';


const percentToDecimal = function (decimal) {
    return ((decimal * 100) + '%')
}

const calcMarks = function (total, goal) {
    return percentToDecimal(total/goal)
}

export const Subject = (
{students}) => (
<div className = "Marks">
    {
        students.map (
            (subject, i) =>
                <div key={i} className = "mb-2 container">
                    <b>Student {i + 1}</b>
                    <div>Math: {subject.math}</div>
                    <div>English:{subject.english}</div>
                    <div>Science:{subject.science}</div>
                    <div>Computer:{subject.computer}</div>
                    <div>Total:{ 
                        calcMarks(
                            subject.math +
                            subject.english +
                            subject.science +
                            subject.computer,
                            subject.total
                        )
                    }</div>
                </div>
            )
    }
</div>
);
    