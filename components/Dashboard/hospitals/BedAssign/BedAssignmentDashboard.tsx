import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BRAND_COLORS } from "@/components/Dashboard/hospitals/dashboard/constants";
import { sharedStyles } from './styles/shared';
import { motion } from 'framer-motion';

interface Assignment {
  bedID: string;
  patientName: string;
  department: string;
  status: string;
  admissionDate: string;
  expectedDischarge: string;
  priority: string;
  nurseAssigned: string;
}

interface Props {
  assignments: Assignment[];
}

export default function BedAssignmentDashboard({ assignments }: Props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortConfig, setSortConfig] = React.useState<{
    key: keyof Assignment;
    direction: 'asc' | 'desc';
  } | null>(null);

  // Memoized filtered and sorted assignments
  const processedAssignments = useMemo(() => {
    const filtered = assignments.filter(
      (assignment) =>
        assignment.bedID.toLowerCase().includes(searchTerm.toLowerCase()) ||
        assignment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        assignment.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortConfig) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [assignments, searchTerm, sortConfig]);

  const handleSort = (key: keyof Assignment) => {
    setSortConfig(current => ({
      key,
      direction: current?.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${sharedStyles.card.base} overflow-hidden`}
    >
      <div className={sharedStyles.card.header}>
        <div className="flex justify-between items-center">
          <div>
            <h2 className={sharedStyles.text.title} style={{ color: BRAND_COLORS.text.primary }}>
              Bed Assignments
            </h2>
            <p className={sharedStyles.text.subtitle} style={{ color: BRAND_COLORS.text.secondary }}>
              Current bed allocation status
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Input
              placeholder="Search beds, patients..."
              className="max-w-xs bg-gray-50/50 border-gray-100"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              onClick={() => setSearchTerm('')}
              className="p-2 rounded-lg hover:bg-gray-50/80 transition-colors"
              style={{ color: BRAND_COLORS.text.secondary }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      
      <div className={sharedStyles.card.content}>
        <div className="overflow-x-auto rounded-lg border border-gray-100/50">
          <Table>
            <TableHeader>
              <TableRow>
                {/* Add onClick handlers for sorting */}
                <TableHead 
                  onClick={() => handleSort('bedID')} 
                  className="cursor-pointer hover:bg-gray-50"
                  style={{ color: BRAND_COLORS.text.secondary }}
                >
                  Bed ID {sortConfig?.key === 'bedID' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </TableHead>
                <TableHead onClick={() => handleSort('patientName')} className="cursor-pointer hover:bg-gray-50">
                  Patient Name {sortConfig?.key === 'patientName' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </TableHead>
                <TableHead onClick={() => handleSort('department')} className="cursor-pointer hover:bg-gray-50">
                  Department {sortConfig?.key === 'department' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </TableHead>
                <TableHead onClick={() => handleSort('status')} className="cursor-pointer hover:bg-gray-50">
                  Status {sortConfig?.key === 'status' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </TableHead>
                <TableHead onClick={() => handleSort('priority')} className="cursor-pointer hover:bg-gray-50">
                  Priority {sortConfig?.key === 'priority' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </TableHead>
                <TableHead onClick={() => handleSort('nurseAssigned')} className="cursor-pointer hover:bg-gray-50">
                  Nurse {sortConfig?.key === 'nurseAssigned' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </TableHead>
                <TableHead onClick={() => handleSort('admissionDate')} className="cursor-pointer hover:bg-gray-50">
                  Admission {sortConfig?.key === 'admissionDate' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </TableHead>
                <TableHead onClick={() => handleSort('expectedDischarge')} className="cursor-pointer hover:bg-gray-50">
                  Expected Discharge {sortConfig?.key === 'expectedDischarge' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {processedAssignments.map((assignment) => (
                <TableRow 
                  key={assignment.bedID}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <TableCell style={{ color: BRAND_COLORS.text.primary }}>{assignment.bedID}</TableCell>
                  <TableCell style={{ color: BRAND_COLORS.text.primary }}>{assignment.patientName || "—"}</TableCell>
                  <TableCell style={{ color: BRAND_COLORS.text.primary }}>{assignment.department}</TableCell>
                  <TableCell>
                    <Badge
                      variant={assignment.status === "Available" ? "success" : "default"}
                      style={{ 
                        backgroundColor: assignment.status === "Available" 
                          ? `${BRAND_COLORS.chart.tertiary}20`
                          : `${BRAND_COLORS.chart.primary}20`,
                        color: assignment.status === "Available"
                          ? BRAND_COLORS.chart.tertiary
                          : BRAND_COLORS.chart.primary
                      }}
                    >
                      {assignment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        assignment.priority === "High" 
                          ? "destructive" 
                          : assignment.priority === "Medium" 
                          ? "warning" 
                          : "default"
                      }
                      style={{
                        backgroundColor: getPriorityColor(assignment.priority, true),
                        color: getPriorityColor(assignment.priority, false)
                      }}
                    >
                      {assignment.priority}
                    </Badge>
                  </TableCell>
                  <TableCell style={{ color: BRAND_COLORS.text.primary }}>{assignment.nurseAssigned}</TableCell>
                  <TableCell style={{ color: BRAND_COLORS.text.primary }}>{assignment.admissionDate || "—"}</TableCell>
                  <TableCell style={{ color: BRAND_COLORS.text.primary }}>{assignment.expectedDischarge || "—"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </motion.div>
  );
}

// Helper function for priority colors
function getPriorityColor(priority: string, isBackground: boolean): string {
  switch (priority) {
    case 'High':
      return isBackground ? `${BRAND_COLORS.chart.primary}20` : BRAND_COLORS.chart.primary;
    case 'Medium':
      return isBackground ? `${BRAND_COLORS.chart.secondary}20` : BRAND_COLORS.chart.secondary;
    default:
      return isBackground ? `${BRAND_COLORS.chart.tertiary}20` : BRAND_COLORS.chart.tertiary;
  }
} 