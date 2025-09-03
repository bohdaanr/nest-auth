import { ApiOperation, ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty({
    description: 'JWT access token',
    example: 'e898HHOiyu87*HHBIH7...',
  })
  accessToken: string;
}
