import { CashflowClient, CashFlowProject } from "../client/CashflowClient";
import { useEffect, useMemo, useState } from "react";
import { scheduleEvents } from "./scheduleEvents";
import { accomodateEvents } from "./accomodateEvents";

export const useCashflowEvents = (client: CashflowClient, until: Date) => {
  const [project, setProject] = useState<CashFlowProject | null>(null);
  useEffect(() => {
    client.getAll().then((data) => {
      const timeline = scheduleEvents(data.events, until);
      setProject({ events: timeline, balance: data.balance });
    });
  }, [client, until]);

  const timelineAccomodated = useMemo(() => {
    return project && accomodateEvents(project.events, project.balance);
  }, [project]);

  return { timeline: timelineAccomodated };
};

export type CashFlowAccomodated = ReturnType<typeof useCashflowEvents>;
