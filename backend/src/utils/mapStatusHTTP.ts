export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,    
    NOT_FOUND: 404,
    REQUIRED_FIELD: 422,
    SUCCESSFUL: 200,
    CREATED: 201,
    DELETED: 204,
  };
  
  return statusHTTPMap[status] ?? 500;
}