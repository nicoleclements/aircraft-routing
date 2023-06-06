export interface AircraftRouting {
  aircraft_routing: AircraftRoute[]
}

export interface AircraftRoute {
  station: string
  fos_id: string
  route: string
  ops_status: string
  ib_flight: string
  ob_flight: string
  arr_time: string
  dep_time: string
  dep_gate: string
  arr_gate: string
}
