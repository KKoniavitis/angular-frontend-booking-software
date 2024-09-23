import { Site } from "../../site-overview/domains/site.domain";

import { ServiceProfile } from "../../shared/models/common.model";

export interface Enterprise {
  id: string;
  name: string;
  notes?: string;
  address?: string;
  phone?: string;
  fax?: string;
  email?: string;
  serviceProfileId: string;
  lastUpdated: string;
  relationships: {
    serviceProfile: ServiceProfile;
  };
  sites?: Site[];
}
