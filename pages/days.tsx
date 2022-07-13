import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
const SCHOOLCODE = 7150658;
const LOCALCODE = "C10";

export default function Days() {
    const [content, setContent] = useState<object[] | string>([]);
    const tempContent: object[] = [];
    const [marks, setMarks] = useState<string[]>([]);
    const tempMarks: string[] = [];
    const [value, onChange] = useState(new Date());
    const [today, setToday] = useState(dayjs().format("YYYYMM"));
    useEffect(() => {
        setToday(value.toISOString().substr(0, 7).replace("-", ""));
        const API = `https://open.neis.go.kr/hub/SchoolSchedule?Type=Json&ATPT_OFCDC_SC_CODE=${LOCALCODE}&SD_SCHUL_CODE=${SCHOOLCODE}&AA_YMD=${today}
        `;
        try {
            axios.get(API).then((response: any) => {
                for (
                    let i = 0;
                    i < response.data.SchoolSchedule[1]?.row.length;
                    i++
                ) {
                    if (
                        response.data.SchoolSchedule[1]?.row[i].EVENT_NM !==
                        "토요휴업일"
                    ) {
                        // setContent((prev) => [
                        //     ...prev,
                        //     {
                        //         date: response.data.SchoolSchedule[1].row[i].AA_YMD,
                        //         <content:></content:>
                        //             response.data.SchoolSchedule[1].row[i].EVENT_NM,
                        //     },
                        // ]);
                        tempContent.push({
                            date: response.data?.SchoolSchedule[1].row[i]
                                .AA_YMD,
                            content:
                                response.data?.SchoolSchedule[1].row[i]
                                    .EVENT_NM,
                        });
                        tempMarks.push(
                            response.data?.SchoolSchedule[1].row[i].AA_YMD
                        );
                    }
                }
                setMarks(tempMarks);
                setContent(tempContent);
            });
        } catch (e: any) {
            console.log("안댐");
        } 
    }, [value]);
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                height: "calc(100vh - 54px)",
            }}
        >
            <Calendar
                onChange={onChange}
                value={value}
                locale="ko"
                tileClassName={({ date, view }) => {
                    if (
                        marks.find((x) => x === moment(date).format("YYYYMMDD"))
                    ) {
                        return "highlight";
                    }
                    return null;
                }}
            />
            <ul className="days-board">
                {
                    //@ts-ignore
                    content.map((i, ix: number) => {
                        return (
                            <li key={ix}>
                                {i.date} {i.content}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
