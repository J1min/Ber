import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

const SCHOOLCODE = 7150658;
const LOCALCODE = "C10";
const TODAY = dayjs().format("YYYYMM");
const API = `https://open.neis.go.kr/hub/SchoolSchedule?Type=Json&ATPT_OFCDC_SC_CODE=${LOCALCODE}&SD_SCHUL_CODE=${SCHOOLCODE}&AA_YMD=${TODAY}`;

export default function Days() {
    const [content, setContent] = useState<any[]>([]);
    const tempContent: object[] = [];
    useEffect(() => {
        axios.get(API).then((response: any) => {
            console.log(response.data.SchoolSchedule[1].row.length);

            for (
                let i = 0;
                i < response.data.SchoolSchedule[1].row.length;
                i++
            ) {
                if (
                    response.data.SchoolSchedule[1].row[i].EVENT_NM !==
                    "토요휴업일"
                ) {
                    // setContent((prev) => [
                    //     ...prev,
                    //     {
                    //         date: response.data.SchoolSchedule[1].row[i].AA_YMD,
                    //         content:
                    //             response.data.SchoolSchedule[1].row[i].EVENT_NM,
                    //     },
                    // ]);
                    tempContent.push({
                        date: response.data.SchoolSchedule[1].row[i].AA_YMD,
                        content:
                            response.data.SchoolSchedule[1].row[i].EVENT_NM,
                    });
                }
            }
            setContent(tempContent);
        });
    }, []);

    return (
        <div>
            {content.map((i, ix: number) => {
                return (
                    <div key={ix}>
                        <li>
                            {i.date} {i.content}
                        </li>
                    </div>
                );
            })}
        </div>
    );
}
